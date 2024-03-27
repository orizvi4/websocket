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
        await this.eventsGateway.emitter("signout", username);
    }

    @Post("channel/motion")
    async motionDetected(@Body("name") name: string) {
        await this.eventsGateway.emitter("motion_detection", name);
    }

    @Post("recording/delete")
    async recordingDelete(@Body("recordingUrl") recordingUrl: string) {
        await this.eventsGateway.emitter("recording_delete", recordingUrl);
    }
}