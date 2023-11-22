/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * @param requestBody
     * @returns boolean Success
     * @throws ApiError
     */
    public static postInc(
        requestBody?: {
            amount: number;
        },
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/inc',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getValue(): CancelablePromise<{
        value: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/value',
        });
    }

}
