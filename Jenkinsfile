pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your Next.js source code from version control
                git 'https://github.com/yourusername/your-nextjs-app.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build Next.js app with Docker Compose
                    sh 'docker-compose build'
                }
            }
        }

        stage('Run Tests') {
            steps {
                // You can add test commands here if needed
            }
        }

        stage('Deploy') {
            steps {
                // You can add deployment steps here
            }
        }
    }

    post {
        success {
            // Add any post-build actions here
        }
        failure {
            // Add any failure actions here
        }
    }
}
