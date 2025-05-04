Documentation on how to Deloy 

# run and build locally 
docker build -t hex-calculator 
docker run -d -p 8080:80 hex-calculator 

# Create Repo 
aws ecr create-repository --repository-name hex-calculator --region af-south-1

# Authenication 
aws ecr get-login-password --region af-south-1 | docker login --username AWS --password-stdin <enter account ID>.dkr.ecr.af-south-1

# Push Docker image 
docter tag hex-calculator:lastest <enter repository url>
docker push <enter repository url>

# Deploy to ESC
create cluster 
choose fargate 
name: hex-calculator-cluster 
    create new task definition-> fargate 
Create Service tab 
Deploy
