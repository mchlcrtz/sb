class Vehicle < ApplicationRecord
  enum vehicle_type: %i[sedan coupe mini-van motorcycle]
  enum engine_status: %i[works fixable junk], _prefix: :engine
  enum seat_status: %i[works fixable junk], _prefix: :seat


  after_commit :generate_registration_id, on: :create

  scope :bike, -> { where 'vehicle_type == ?', 3 }
  scope :car, ->  { select( Vehicle.attribute_names - ['seat_status']).where('vehicle_type != ?', 3)  }


  def generate_registration_id
    # VehicleRegistrationJob.perform_later self
    VehicleRegistrationService.register_vehicle self
  end
  
  def mileage_rating
    case
    when mileage <= 10000
      'low'
    when mileage.between?(10000, 100000)
      'medium'
    when mileage >= 100000
      'high'
    else
      'broken'
    end
  end
end
