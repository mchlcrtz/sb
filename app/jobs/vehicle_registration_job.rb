
class VehicleRegistrationJob < ApplicationJob
    queue_as :default  
  
    def perform(vehicle)
        VehicleRegistrationService.register_vehicle(vehicle)
    end
  end
  