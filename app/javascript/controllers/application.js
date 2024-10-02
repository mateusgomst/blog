import { Application } from "@hotwired/stimulus"
import "controllers"
import Rails from "@rails/ujs"
import "@hotwired/turbo-rails"
import Turbolinks from "@rails/activestorage"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import { Turbo } from "@hotwired/turbo-rails"


const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

Rails.start()
Turbolinks.start()
ActiveStorage.start()
Turbo.start()

export { application }

