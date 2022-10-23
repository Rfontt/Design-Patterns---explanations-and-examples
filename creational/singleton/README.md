# Singleton Pattern

It helps us when we need to have a unique instance class to share with the other classes using a global access point.

### Why a unique instance?

Exists some problems that will be resolved with this pattern. The reason is because some resources need to be shared with other classes and they need to have a unique instance.

Example: 

- Database access;
- Logger.

# Advantages

- Global access to all project classes for a unique singleton instance;
- Instance protection using encapsulation.

# Unadvantageous

- It's hard to test;
- It violates Single Responsibility Principle.