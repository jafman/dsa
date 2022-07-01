-- write your code in PostgreSQL 9.4

-- SELECT event_type, value
-- FROM events
-- GROUP BY event_type
-- HAVING COUNT(*) > 1
-- ORDER BY event_type;
-- CAST ('100' AS INTEGER);
SELECT event_type, CAST(AVG(value_diff) AS INTEGER) AS value FROM( 
    SELECT event_type, LAST_VALUE(value_diff) OVER (ORDER BY event_type) AS value_diff 
    FROM (
        SELECT * FROM (
            WITH sorted_table AS ( 
                SELECT * FROM events
                ORDER BY event_type, time
            )
            SELECT  event_type, 
                    (value - LAG(value, 1, value) OVER (ORDER BY event_type, time)) AS value_diff
            FROM sorted_table    
        ) t    
    ) q
) z
GROUP BY event_type
HAVING COUNT(*) > 1
ORDER BY event_type;


