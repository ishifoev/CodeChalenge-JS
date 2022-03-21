function taskAssignment(k, tasks) {
  // Write your code here.
  let pairedTasks = [];
	let tasksDurationToIndices = getTaskDurationIndices(tasks)
	let sortedTasks = [...tasks].sort((a, b) => a - b)
	
	for(let idx = 0; idx < k; idx++) {
		let taks1Duration = sortedTasks[idx];
		let indicesWithTaskDuration = tasksDurationToIndices[taks1Duration]
		let task1Index = indicesWithTaskDuration.pop();
		
		let task2SortedIndex = tasks.length - 1 - idx;
		let task2Duration = sortedTasks[task2SortedIndex];
		let indicesWithTask2Duration = tasksDurationToIndices[task2Duration]
		let tasks2Index = indicesWithTask2Duration.pop();
		pairedTasks.push([task1Index, tasks2Index])
		
	}
	return pairedTasks;
}

function getTaskDurationIndices(tasks) {
	let tasksDurationToIndices = {};
	
	for(let idx = 0; idx < tasks.length; idx++) {
		const tasksDuration = tasks[idx];
		if(tasksDuration in tasksDurationToIndices) {
			tasksDurationToIndices[tasksDuration].push(idx);
		} else {
			tasksDurationToIndices[tasksDuration] = [idx]
		}
	}
	return tasksDurationToIndices;
}
