pipeline {
    agent any
    triggers {
        cron('*/2 * * * *')
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'hostname'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
