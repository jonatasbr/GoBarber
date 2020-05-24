/**
 * SEMPRE QUE FAZEMOS INTEGRAÇÃO COM BLIOTECAS EXTERNAS, COM SERVIÇOS QUE PODEM MUDAR
 * COM O TEMPO, PRECISAMOS CRIAR ESTES PROVIDERS PARA NÃO HAVER MAIORES IMPACTOS
 * NA APLICAÇÃO. DESTE MODO, NÓS ISOLAMOS AS FUNCIONALIDADES DIRETAMENTE INTEGRADAS
 * COM ESTES SERVIÇOS.
 */
import './StorageProvider';
import './MailTemplateProvider';
import './MailProvider';
import './CacheProvider';