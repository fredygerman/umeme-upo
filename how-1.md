                +-------------+
                |    Start    |
                +-------------+
                        |
                        v
                +------------------+
                |  User Visits     |
                |  Website         |
                +------------------+
                        |
                        v
            +-----------------------+
            | User Select Location  |
            +-----------------------+
                        |
                        v
            +--------------------------+
            | Website Checks Database  |
            | for Last Ping            |
            +--------------------------+
                        |
                        v
               +-------------------+
               | Is Last Ping was  |
               | within 5 minutes  |
               +-------------------+
                        |
                        v
                +----+----+----+----+
                |                   |
              "Yes"               "No"
                |                   |
                v                   v
        +-----------------+ +-----------------+
        | Power Status ON | | Power Status OFF|
        | (Website show   | | (Website show   |
        | Status ON)      | | Status OFF)     |
        +-----------------+ +-----------------+
               |                   |
               v                   v
            +------------------------+
            | Website Check Database |
            | for Last Ping(repeat)  |
            +------------------------+
                        |    
                        |
                        v
            +------------------+
            |       End        |
            +------------------+
