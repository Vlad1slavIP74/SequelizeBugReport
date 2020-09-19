const { User,
    Account,
    UserChildren,
    MusicInstruments,
    UserInfo,
    UserInstruments,
    sequelize
}   = require('./models');


async function main() {
    // await sequelize.transaction(async () => {
    //   try {
    //     const user = await User.findAll({
    //         include: [
    //             {
    //                 // association: User.MusicInstruments
    //             model: MusicInstruments 
    //             }
    //         ]
    //     })
    //   } catch (error) {
    //       console.log(error)
    //       throw error
    //   }
        
    // })
    return 0
}

main()