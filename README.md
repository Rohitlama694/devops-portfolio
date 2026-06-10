## Git Workflow

This project follows a simplified GitFlow model:

- main → Production branch (deployed on EC2)
- dev → Integration/testing branch
- feature/* → Feature development branches

### Flow:
feature branch → dev → main → EC2 deployment

Deployment is done using Nginx on AWS EC2 instance.
