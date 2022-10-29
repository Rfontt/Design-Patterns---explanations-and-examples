package instances;

import entities.EnvironmentEntity;
import interfaces.EnvironmentInterface;

public class EnvironmentInstance {
    private static EnvironmentInterface environmentInterface;

    private EnvironmentInstance() {

    }

    static public EnvironmentInterface getEnvironmentInterface() {
        if (environmentInterface == null) {
            environmentInterface = new EnvironmentEntity("dev");
        }

        return environmentInterface;
    }
}
