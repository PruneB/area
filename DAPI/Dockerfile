FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env

WORKDIR /Api

COPY . ./

EXPOSE 5001

CMD ["dotnet", "watch", "run", "--urls", "https://0.0.0.0:5001"]


