Rails.application.config.middleware.use OmniAuth::Builder do
  provider :identity, 
    fields: [:email],
    on_failure: -> (env) { OmniAuth::FailureEndpoint.new(env).redirect_to_failure },
    on_failed_registration: IdentitiesController.action(:new)
end