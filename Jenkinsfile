pipeline {
    agent any

    stages {
        stage('Build Dev') {
            steps {
                echo 'Build Dev..'
                sh("cd k3s/production/ && skaffold run")
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Build Production') {
            steps {
                echo 'Build Production....'
                sh("cd k3s/production/ && skaffold run")
            }
        }
    }
}
