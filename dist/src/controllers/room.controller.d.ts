import { Request, Response } from "express";
export declare const getAllRooms: (req: Request, res: Response) => Promise<void>;
export declare const postRoomByCode: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getRoomDataByCode: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=room.controller.d.ts.map