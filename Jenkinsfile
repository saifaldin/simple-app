pipeline {
    agent { docker { image 'node:14-apline'}}
    stages {
        stage('test') {
          steps {
            sh 'node --version'
          }
        }
        // stage('build') {
        //   steps {
        //     sh 'npm'
        //   }
        // }
        // stage('test') {
        //   steps {
        //     sh 'npm run test'
        //   }
        // }
    }
}
