export function getAllNotes(req, res) {
    res.status(200).send("you got some notes");
};

export function addNote (req, res)  {
    res.status(201).json({message: "post created"});
};

export function updateNote (req, res)  {
    res.status(200).json({message: "post updated"});
};

export function deleteNote (req, res)  {
    res.status(200).json({message: "NoteDeleted"});
};

