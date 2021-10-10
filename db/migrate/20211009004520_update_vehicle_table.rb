class UpdateVehicleTable < ActiveRecord::Migration[6.1]
  def change
    add_column :vehicles, :vehicle_type, :integer, null: false
    add_column :vehicles, :mileage, :integer, null: false, default: 0
    add_column :vehicles, :wheels, :integer, null: false, default: 4
    add_column :vehicles, :doors, :integer, null: false, default: 4
    add_column :vehicles, :engine_status, :integer, null: false, default: 0
    add_column :vehicles, :seat_status, :integer, default: 0
    add_column :vehicles, :registration_id, :string
  end
end
