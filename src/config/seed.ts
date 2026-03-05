import { prisma } from "config/client";

const initDatabase = async () => {
    const countUser = await prisma.user.count();
    if (countUser == 0) {

    } else {
        console.log(">>> Already Init Data")
    }
    await prisma.user.createMany({
        data: [{
            username: "hoang", password: "123", address: "viet nam", accountType: "SYSTEM"
        },
        { username: "duong", password: "12335", address: "viet nam", accountType: "SYSTEM" }
        ]

    })
}
export default initDatabase;