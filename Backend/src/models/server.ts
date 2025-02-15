import express, { Application } from 'express'
import RouterUser from '../routes/user';
import RouterStudent from '../routes/student';
import { User } from './user';
import { Student } from './student';


class Server {
    private app: Application;
    private port: string;



    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3017';
        this.listen();
        this.midleware();
        this.router();
        this.DBconnet();



    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server on port', this.port)
        })
    }

    router(){
        this.app.use(RouterUser)
        this.app.use(RouterStudent)

    }

    midleware(){
       this.app.use(express.json())
    }

    async DBconnet() {
        try {
           // await sequelize.authenticate();
           await User.sync();
           await Student.sync();
           console.log('The table for the user model was just (re)create!')
            console.log('Connection has been established successfully.');

        } catch (error) {
            console.log('Connection has been declined', error);

        }
    }
}
export default Server;