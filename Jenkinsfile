node {
    stage("SCM Checkout") {
        git branch: 'main', url: 'https://github.com/Ganesh-Jayasamraj-Teslon/Simple-CRUD-Operation.git'
    }

    stage("Docker build and run using compose") {
        sh "docker compose up -d"
    }
}