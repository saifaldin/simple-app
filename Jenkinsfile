pipeline {
  agent { docker { image 'node:14-alpine' } }
  stages {
    stage('node') {
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
