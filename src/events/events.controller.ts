import { Body, Controller, Post } from "@nestjs/common";
import { EventsGateway } from "./events.gateway";

@Controller()
export class eventsController {
    constructor(private eventsGateway: EventsGateway) {}

    @Post("channel/live")
    async channelIsLive(@Body("_id") id: string, @Body("isLive") isLive: boolean) {
        this.eventsGateway.emitter("channel_live",{_id: id, isLive: isLive});
    }

    @Post("user/signout")
    async userSignout(@Body("username") username: string) {
        this.eventsGateway.emitter("signout", username);
    }
}