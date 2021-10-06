; Auto-generated. Do not edit!


(cl:in-package turtlebot_actions-msg)


;//! \htmlinclude TurtlebotMoveGoal.msg.html

(cl:defclass <TurtlebotMoveGoal> (roslisp-msg-protocol:ros-message)
  ((turn_distance
    :reader turn_distance
    :initarg :turn_distance
    :type cl:float
    :initform 0.0)
   (forward_distance
    :reader forward_distance
    :initarg :forward_distance
    :type cl:float
    :initform 0.0))
)

(cl:defclass TurtlebotMoveGoal (<TurtlebotMoveGoal>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <TurtlebotMoveGoal>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'TurtlebotMoveGoal)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name turtlebot_actions-msg:<TurtlebotMoveGoal> is deprecated: use turtlebot_actions-msg:TurtlebotMoveGoal instead.")))

(cl:ensure-generic-function 'turn_distance-val :lambda-list '(m))
(cl:defmethod turn_distance-val ((m <TurtlebotMoveGoal>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader turtlebot_actions-msg:turn_distance-val is deprecated.  Use turtlebot_actions-msg:turn_distance instead.")
  (turn_distance m))

(cl:ensure-generic-function 'forward_distance-val :lambda-list '(m))
(cl:defmethod forward_distance-val ((m <TurtlebotMoveGoal>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader turtlebot_actions-msg:forward_distance-val is deprecated.  Use turtlebot_actions-msg:forward_distance instead.")
  (forward_distance m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <TurtlebotMoveGoal>) ostream)
  "Serializes a message object of type '<TurtlebotMoveGoal>"
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'turn_distance))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'forward_distance))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <TurtlebotMoveGoal>) istream)
  "Deserializes a message object of type '<TurtlebotMoveGoal>"
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'turn_distance) (roslisp-utils:decode-single-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'forward_distance) (roslisp-utils:decode-single-float-bits bits)))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<TurtlebotMoveGoal>)))
  "Returns string type for a message object of type '<TurtlebotMoveGoal>"
  "turtlebot_actions/TurtlebotMoveGoal")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'TurtlebotMoveGoal)))
  "Returns string type for a message object of type 'TurtlebotMoveGoal"
  "turtlebot_actions/TurtlebotMoveGoal")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<TurtlebotMoveGoal>)))
  "Returns md5sum for a message object of type '<TurtlebotMoveGoal>"
  "c971f114b08a2a1ad79af4c9ca9f358c")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'TurtlebotMoveGoal)))
  "Returns md5sum for a message object of type 'TurtlebotMoveGoal"
  "c971f114b08a2a1ad79af4c9ca9f358c")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<TurtlebotMoveGoal>)))
  "Returns full string definition for message of type '<TurtlebotMoveGoal>"
  (cl:format cl:nil "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======~%#goal definition~%float32 turn_distance     # in radians, ccw = +, cw = -~%float32 forward_distance  # in meters, forward = +, backward = -~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'TurtlebotMoveGoal)))
  "Returns full string definition for message of type 'TurtlebotMoveGoal"
  (cl:format cl:nil "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======~%#goal definition~%float32 turn_distance     # in radians, ccw = +, cw = -~%float32 forward_distance  # in meters, forward = +, backward = -~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <TurtlebotMoveGoal>))
  (cl:+ 0
     4
     4
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <TurtlebotMoveGoal>))
  "Converts a ROS message object to a list"
  (cl:list 'TurtlebotMoveGoal
    (cl:cons ':turn_distance (turn_distance msg))
    (cl:cons ':forward_distance (forward_distance msg))
))
