### Compfest Note Taker

## DESCRIPTION

Hassle-free Note taking application, created with node.js and mongoDB.



## ROUTES

# Reading notes
    /notes/:key

# Writing notes (overwriting previous note values)
    /notes/:key/write/:value

# Appending notes (preserving previous note values)
    /notes/:key/append/:value




## NOTES

you may use this notetaker to save anything (text-based). you are free to use any key, for instance your team name (not recommended).
Note that all competing teams are accessing the same site, thus using weak keys will enable other teams to guess your key and access your notes. (Thus bringing your disadvantages).




# EXAMPLES

using key `636f6d7066657374` to write value `your note goes here`
    /notes/636f6d7066657374/write/your note goes here

reading note with key `636f6d7066657374`
    /notes/636f6d7066657374

appending previous note value with key `636f6d7066657374`
    /notes/636f6d7066657374/append/appended text to append