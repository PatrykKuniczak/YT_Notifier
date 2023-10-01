import {DocumentBuilder} from "@nestjs/swagger";

const swaggerConfig = new DocumentBuilder()
    .setTitle("YT Plugin")
    .setVersion('0.0.1')
    .setDescription(`If you want to authenticate click 'Authorize' button and the same inside modal (*ignore client_id input*),
        then you're redirected to auth page, after successful authentication process you can use all endpoints.\n
        For implementing on frontend: When authentication is failed 401 status code is returned`)
    .addOAuth2(
        {
            type: 'oauth2',
            flows: {
                implicit: {
                    authorizationUrl: `/api/auth/login`,
                    scopes: {},
                },
            },
        },
        'Auth0',
    )
    .build();

export default swaggerConfig;
