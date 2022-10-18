import {NextApiResponse} from "next";

export const withConflict = async <T>(response: NextApiResponse, cb?: T) => {
    response.status(409).end(cb);
};
