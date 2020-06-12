var array_questions = [
	{
		statement: "You can be academically suspended from the University of Utah for having a 2.0 Term GPA.",
		topic: "Academic Standards Policy",
		sub_topic: "Suspension",
		answer_key: "option2",
		hint: "https://advising.utah.edu/academic-standards/standings-definitions.php#suspension",
		type: "true_false",
		labels: ["True", "False", "N/A", "N/A"],
		video: { display: "false", source: "N/A" },
		help: ["Be sure to check out the link provided in the Hint."],
	},
	{
		statement: "Once academically suspended from the University of Utah, you may not return as a student.",
		topic: "Academic Standards Policy",
		sub_topic: "Suspension",
		answer_key: "option2",
		hint: "https://advising.utah.edu/academic-standards/standings-definitions.php#suspension",
		type: "true_false",
		labels: ["True", "False", "N/A", "N/A"],
		video: { display: "false", source: "N/A" },
		help: ["Be sure to check out the link provided in the Hint."],
	},
	{
		statement: "Select the correct definition for Dean's List.",
		topic: "Academic Standards Policy",
		sub_topic: "Dean's List",
		answer_key: "option4",
		hint: "https://advising.utah.edu/academic-standards/standings-definitions.php#deans_list",
		type: "multiple_choice",
		labels: [
			"A student who earns a grade point average (GPA) of 3.3 or higher in at least 15 graded hours during any one term.",
			"A student who earns a grade point average (GPA) of 3.5 or higher in at least 15 graded hours during any one term.",
			"A student who earns a grade point average (GPA) of 3.3 or higher in at least 12 graded hours during any one term.",
			"A student who earns a grade point average (GPA) of 3.5 or higher in at least 12 graded hours during any one term.",
		],
		video: { display: "false", source: "N/A" },
		help: ["Be sure to check out the link provided in the Hint."],
	},
];

var array_answers = [];

console.log(array_questions);
console.log(array_answers);
console.log(array_questions[1].statement);
