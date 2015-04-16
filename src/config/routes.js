angular.module('gotr')
    .config(Router);

Router.$inject = ['$routeProvider', '$locationProvider'];
function Router($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'dashboard.html',
            controller: 'DashboardController as vm',
            resolve: {
                taskList: TaskList
            }
        });

    $locationProvider.html5Mode(true);
}

TaskList.$inject = ['taskListStore'];
function TaskList(taskListStore) {
    return taskListStore.get();
}
