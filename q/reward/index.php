<?php 
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, 'http://51.15.120.178:13281/getinfo');
$result = curl_exec($ch);
$obj = json_decode($result, TRUE);
curl_close($ch);

$rewardRaw = $obj['last_block_reward'];
$reward = number_format($rewardRaw / 100, 2, ".", "");

print_r($reward);
?>
