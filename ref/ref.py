from flask import Flask, request, jsonify

app = Flask(__name__)

# Словарь для хранения рефералов
referrals = {}

@app.route('/referral', methods=['POST'])
def add_referral():
    data = request.json
    referrer_id = data.get('referrer_id')

    # Если реферал уже существует, увеличиваем счетчик
    if referrer_id in referrals:
        referrals[referrer_id] += 1
    else:
        referrals[referrer_id] = 1

    return jsonify({'status': 'ok'}), 201

@app.route('/check_referral', methods=['POST'])
def check_referral():
    data = request.json
    user_id = data.get('user_id')

    # Проверяем количество рефералов для данного пользователя
    referral_count = referrals.get(user_id, 0)
    return jsonify({'referral_count': referral_count}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)