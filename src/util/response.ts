export interface CustomResponse {
	statusCode: number;
	message: string;
	data?: {};
}

export const OK = (data?: {}, message: string = "OK"): CustomResponse => ({
	statusCode: 200,
	message,
	data,
});

export const Created = (
	data?: {},
	message: string = "Created"
): CustomResponse => ({
	statusCode: 201,
	message,
	data,
});

export const NoContent = (
	data?: {},
	message: string = "No Content"
): CustomResponse => ({
	statusCode: 204,
	message,
	data,
});
