
  const goals = await Goal.find();

  res.status(200).json({ goals: goals });
});

// @desc Set goal