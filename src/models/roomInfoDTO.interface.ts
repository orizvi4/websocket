import { UserDTO } from "./userDTO.interface";

export interface RoomInfoDTO {
    userCount: number;
    users: UserDTO[];
    roomId: string;
}