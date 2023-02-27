const createTeam = (team) => {
        const createManager = (manager) => {
      return `
          <div class="card employee-card">
          <div class="card-header">
              <h2 class="card-title"></h2>
              <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i></h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: </li>
                  <li class="list-group-item">Email: <a href="mailto:"></a></li>
                  <li class="list-group-item">Office number: </li>
              </ul>
          </div>
      </div>
          `;
    };

    const createEngineer = (engineer) => {
        return `
            <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title"></h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i></h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: </li>
                <li class="list-group-item">Email: <a href="mailto:"></a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
            `;
      };
}
// create the html for interns
const createIntern = (intern) => {
    return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title"></h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: </li>
            <li class="list-group-item">Email: <a href="mailto:"></a></li>
            <li class="list-group-item">School: </li>
        </ul>
    </div>
</div>
        `;
  };