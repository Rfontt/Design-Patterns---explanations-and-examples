import { MyDatabaseClassic } from "./database/my-database-classic";

function consumeDBClassic() {
    const db1 = MyDatabaseClassic.getInstance();
    const db2 = MyDatabaseClassic.getInstance();

    db1 === db2 ? console.log(true) : console.log(false);

    const myDatabaseClassic = MyDatabaseClassic.getInstance();

    myDatabaseClassic.add({ name: "Rfontt", age: 20 });
    myDatabaseClassic.add({ name: "Rfontt2", age: 21 });
    myDatabaseClassic.add({ name: "Rfontt3", age: 22 });
    myDatabaseClassic.add({ name: "Rfontt4", age: 23 });
    myDatabaseClassic.add({ name: "Rfontt5", age: 24 });
    myDatabaseClassic.add({ name: "Rfont6", age: 25 });

    myDatabaseClassic.remove(3);

    myDatabaseClassic.show();
}

export { consumeDBClassic };