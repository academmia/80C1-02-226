
function getTasks() {
    let tasks = [
        { subject: 'Home page design', priority:'Normal', status: 'Closed' },
        { subject: 'API Server deployment', priority:'High', status: 'New' },
        { subject: 'About-us page design', priority:'Normal', status: 'Rejected' },
        { subject: 'Email server setup', priority:'Normal', status: 'New' },
    ];

    return tasks;
}
 
function GiveMeTask(tasks) {
    let total = tasks.length; 
    let nextTaskSubject = '';

    for (let task of tasks) {
        if (task.status === 'New') {
            nextTaskSubject = task.subject;
            break;
        }
    }

    console.log('Total tasks: ' + total);
    console.log('You will resolve task : ' + nextTaskSubject);
}


const allTasks = getTasks();
GiveMeTask(allTasks);
