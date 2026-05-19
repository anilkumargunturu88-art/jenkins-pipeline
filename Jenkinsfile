pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Cloning Repository'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8081:80 myapp'
            }
        }

        stage('Deployment') {
            steps {
                echo 'multi stage pipeline deployed successfully'
            }
        }
    }
}
