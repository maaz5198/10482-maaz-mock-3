

        try {
        const slot = await Slot.create(req.body);

        res.status(201).json({message: "created successfully",});
    } catch (error) {
        
        res.status(400).json({message: error.message});
    }


   

