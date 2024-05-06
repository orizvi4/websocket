import { Body, Controller, Post } from "@nestjs/common";
import { EventsGateway } from "./events.gateway";
import { RoomInfoDTO } from "src/models/roomInfoDTO.interface";

@Controller()
export class eventsController {
    constructor(private eventsGateway: EventsGateway) { }

    @Post("channel/live")
    public async channelIsLive(@Body("_id") id: string, @Body("isLive") isLive: boolean) {
        this.eventsGateway.emitter("channel_live", { _id: id, isLive: isLive });
    }

    @Post("user/signout")
    public async userSignout(@Body("username") username: string) {
        await this.eventsGateway.emitter("signout", username);
    }

    @Post("channel/motion")
    public async motionDetected(@Body("name") name: string) {
        await this.eventsGateway.emitter("motion_detection", name);
    }

    @Post("room/info")
    public async roomInfo(@Body() info: RoomInfoDTO) {
        await this.eventsGateway.emitter("room_info", info);
        console.log(info);
    }

    @Post("recording/delete")
    public async recordingDelete(@Body("recordingUrl") recordingUrl: string) {
        await this.eventsGateway.emitter("recording_delete", recordingUrl);
    }
}