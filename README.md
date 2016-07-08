# Compfest Note Taker

## Description

Hassle-free Note taking application, created with node.js and mongoDB.



## Routes

### Reading notes
    /notes/:key

### Writing notes (overwriting previous note values)
    /notes/:key/write/:value

### Appending notes (preserving previous note values)
    /notes/:key/append/:value




## Notes

you may use this notetaker to save anything (text-based). you are free to use any key, for instance your team name (not recommended).
Note that all competing teams are accessing the same site, thus using weak keys will enable other teams to guess your key and access your notes. (Thus bringing your disadvantages).




## Examples

### Writing notes
using key `636f6d7066657374` to write value `your note goes here`

    /notes/636f6d7066657374/write/your note goes here

### Reading notes
reading note with key `636f6d7066657374`
    
    /notes/636f6d7066657374

### Appending notes
appending previous note value with key `636f6d7066657374`
    
    /notes/636f6d7066657374/append/appended text to append