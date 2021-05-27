pipeline {
    agent any
    stages {
        stage('test') {
          agent { docker { image 'node:14-apline' } }
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
