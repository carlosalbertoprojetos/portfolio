# configuração para disparo de email address
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
# EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
DEFAULT_FROM_EMAIL = 'Nome <email@gmail.com>'
# EMAIL_HOST = 'smtp.mailtrap.io'
# EMAIL_HOST_USER = '4cbde76bf57cd9'
# EMAIL_HOST_PASSWORD = 'f0f092992ce056'
# EMAIL_PORT = '2525'

EMAIL_HOST = 'smtp.mailtrap.io'
EMAIL_HOST_USER = '4cbde76bf57cd9'
EMAIL_HOST_PASSWORD = 'f0f092992ce056'
EMAIL_PORT = '2525'