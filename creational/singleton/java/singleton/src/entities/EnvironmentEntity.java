package entities;

import interfaces.EnvironmentInterface;

public class EnvironmentEntity implements EnvironmentInterface {
    private String envDevelopment;

    public EnvironmentEntity(String envDevelopment) {
        this.envDevelopment = envDevelopment;
    }

    public String getApiUrl() {
        switch (envDevelopment.toLowerCase()) {
            case "dev":
                return "http://localhost:8081";
            case "prod":
                return "http://localhost:3000";
            default:
                return "http://localhost:8080";
        }
    }
}
