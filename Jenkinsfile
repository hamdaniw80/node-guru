// Define variable
def registry = '192.168.56.101:5000'
def serviceName = 'node-guru'

// Print variable
pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage ("Git Clone") {
      steps {
        git 'https://github.com/hamdaniw80/node-guru.git'
      }
    }
    stage ("Install module node") {
      steps {
        sh 'npm install'
      }
    }
	stage ("Build Image") {
      steps {
        sh "docker build -t ${registry}/${serviceName}:${env.BUILD_ID} -f Dockerfile_new ."
      }
    }
	stage ("Push Image") {
      steps {
        sh "docker push ${registry}/${serviceName}:${env.BUILD_ID}"
      }
    }
    stage ("Remove Image") {
      steps {
        sh "docker rmi ${registry}/${serviceName}:${env.BUILD_ID}"
      }
    }
    stage ("Clean workspaces") {
      steps {
        sh "rm -rf *"
      }
    }
  }
}