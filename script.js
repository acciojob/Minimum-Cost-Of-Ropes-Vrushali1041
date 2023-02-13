//your code here
function minCostToConnectRopes(arr){
	let pq = new PriorityQueue({comparator: (a, b) => a - b});
	for(let repo of arr){
		pq.offer(rope);
	}
	let cost = 0;
	while(pq.size()>1){
		let rope1 = pq.poll();
		let rope2 = pq.poll();
		let combinedRepo = rope1 + rope2;
		const += combinedRepo;
		pq.offer(combinedRepo)
	}
	return cost;
}