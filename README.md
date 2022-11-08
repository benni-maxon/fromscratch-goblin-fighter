<!-- init commit -->

# Goblin Fighter Plan

### HTML Elements on pg load

    - input for adding new goblins
    - span for tracking defeated goblins
    - span for tracking player HP
    - goblins list (div)

### State

    - array of goblins (object w/ id, name, hp)
    - number of defeated goblins
    - player hp
    - currentID (for making goblins with IDs)

### Events

    - clickable goblins
        -possibilities
            - decrement goblin hp
            - decrement player hp
            - increment defeated goblins
        - update DOM with new goblin and player hp and defeated goblin state

### Functions

    - displayGoblins() - clear out the list and render the goblin element for each item
    - renderGoblin(goblin) - create a goblin element for the specified goblin element
    - goblinClickHandler - take care of the game logic which goblins are clicked (?)

### Slices by feature

    1. rendering goblins list to page
    2. form to create new goblins (render to page)
    3. gamification (resulting impacts to HP on user clicks)
