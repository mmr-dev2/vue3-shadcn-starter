// Repositories
import ApiRepository from '@/repositories/api.repository';

// Services
import TokenService from '@/services/token.service';

// Middlewares
import AuthenticateUser from '@/repositories/middleware/AuthenticateUser';

// Enums
import HttpHeader from '@/enums/HttpHeader';
import MimeType from '@/enums/MimeType';

ApiRepository.setHeader(HttpHeader.CONTENT_TYPE, MimeType.APPLICATION_JSON);
ApiRepository.addResponseMiddleware(AuthenticateUser);

if (TokenService.isExist()) {
    ApiRepository.setHeader(HttpHeader.AUTHORIZATION, `Bearer ${TokenService.get()}`);
}
